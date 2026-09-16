export interface ReservationWindow {
	start: Date;
	end: Date;
}

export function parseReservationWindow(
	startTime: string,
	endTime: string,
): ReservationWindow {
	const start = new Date(startTime);
	const end = new Date(endTime);

	if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
		throw new Error('Reservation startTime and endTime must be valid dates');
	}
	if (start >= end) {
		throw new Error('Reservation endTime must be after startTime');
	}

	return { start, end };
}

/**
 * Half-open interval overlap: [start, end).
 * Adjacent reservations are allowed (existing.end === requested.start).
 */
export function intervalsOverlap(
	existing: ReservationWindow,
	requested: ReservationWindow,
): boolean {
	return existing.start < requested.end && existing.end > requested.start;
}

/**
 * Prisma-compatible range predicate equivalent to intervalsOverlap().
 */
export function overlapWhere(requested: ReservationWindow) {
	return {
		startTime: { lt: requested.end },
		endTime: { gt: requested.start },
	};
}
