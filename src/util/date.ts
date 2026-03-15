export type DateRange = {
  start: Date;
  end?: Date; // undefined = Presnt
};

export class DateRangeFormatter {
  private static formatMonthYear(date: Date): string {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
  }

  private static formatDuration({ start, end }: DateRange): string {
    const endDate = end ?? new Date();

    const months =
      (endDate.getFullYear() - start.getFullYear()) * 12 +
      (endDate.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12 || 1;

    const parts: string[] = [];

    if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (remainingMonths) parts.push(`${remainingMonths} mo`);

    return parts.join(" ");
  }

  static format(range: DateRange): string {
    const startStr = this.formatMonthYear(range.start);
    const endStr = range.end
      ? this.formatMonthYear(range.end)
      : "Present";

    const duration = this.formatDuration(range);

    return `${startStr} — ${endStr} · ${duration}`;
  }
};