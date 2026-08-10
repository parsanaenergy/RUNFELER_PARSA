export type Message = {
  id: string;
  sessionId: string;
  sender: 'customer' | 'operator';
  text: string;
  createdAt: number;
};

type GlobalStore = {
  messages: Map<string, Message[]>;
  listeners: Map<string, Set<(data: Message) => void>>;
};

const globalStore = (globalThis as unknown as { __chatStore?: GlobalStore }).__chatStore || {
  messages: new Map<string, Message[]>(),
  listeners: new Map<string, Set<(data: Message) => void>>(),
};

if (process.env.NODE_ENV !== 'production') {
  (globalThis as unknown as { __chatStore: GlobalStore }).__chatStore = globalStore;
}

const messages = globalStore.messages;
const listeners = globalStore.listeners;

export function addMessage(sessionId: string, message: Message) {
  const list = messages.get(sessionId) || [];

  list.push(message);
  messages.set(sessionId, list);

  const clients = listeners.get(sessionId);

  if (clients) {
    clients.forEach(callback => callback(message));
  }
}

export function getMessages(sessionId: string) {
  return messages.get(sessionId) || [];
}

export function subscribe(
  sessionId: string,
  callback: (message: Message) => void
) {
  if (!listeners.has(sessionId)) {
    listeners.set(sessionId, new Set());
  }

  listeners.get(sessionId)!.add(callback);

  return () => {
    listeners.get(sessionId)?.delete(callback);
  };
}
