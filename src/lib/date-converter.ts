/**
 * Converts a Jalali (Solar Hijri) date into a Gregorian date.
 */
function jalaliToGregorian(j_y: number, j_m: number, j_d: number): Date {
  const jy = j_y - 979;
  const jm = j_m - 1;
  const jd = j_d - 1;

  let j_day_no = 365 * jy + Math.floor(jy / 33) * 8 + Math.floor(((jy % 33) + 3) / 4);
  for (let i = 0; i < jm; ++i) {
    j_day_no += i < 6 ? 31 : 30;
  }
  j_day_no += jd;

  let g_day_no = j_day_no + 79;

  let gy = 1600 + 400 * Math.floor(g_day_no / 146097);
  g_day_no = g_day_no % 146097;

  let leap = true;
  if (g_day_no >= 36525) {
    g_day_no--;
    gy += 100 * Math.floor(g_day_no / 36524);
    g_day_no = g_day_no % 36524;

    if (g_day_no >= 365) {
      g_day_no++;
    } else {
      leap = false;
    }
  }

  gy += 4 * Math.floor(g_day_no / 1461);
  g_day_no = g_day_no % 1461;

  if (g_day_no >= 366) {
    leap = false;
    g_day_no--;
    gy += Math.floor(g_day_no / 365);
    g_day_no = g_day_no % 365;
  }

  let ip = 0;
  const sal_g = [0, 31, (leap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 1; i <= 12; i++) {
    if (g_day_no < sal_g[i]) {
      ip = i;
      break;
    }
    g_day_no -= sal_g[i];
  }
  const gd = g_day_no + 1;

  return new Date(gy, ip - 1, gd);
}

/**
 * Converts a Jalali date string in 'YYYY-MM-DD' format to a Gregorian 'YYYY-MM-DD' date string.
 */
export function jalaliStringToGregorian(dateStr: string): string {
  const parts = dateStr.split("-").map(Number);
  if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) {
    return dateStr; // fallback to original if format is wrong
  }
  const d = jalaliToGregorian(parts[0], parts[1], parts[2]);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
