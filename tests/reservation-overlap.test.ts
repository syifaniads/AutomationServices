import { describe, expect, it } from 'vitest';
import {
	intervalsOverlap,
	overlapWhere,
	parseReservationWindow,
} from '../src/features/reservations/lib/time-overlap';

function window(start: string, end: string) {
	return parseReservationWindow(start, end);
}

describe('reservation overlap semantics', () => {
	const existing = window('2026-09-16T09:00:00Z', '2026-09-16T10:00:00Z');

	it('detects a request fully inside an existing reservation', () => {
		expect(
			intervalsOverlap(
				existing,
				window('2026-09-16T09:15:00Z', '2026-09-16T09:45:00Z'),
			),
		).toBe(true);
	});

	it('detects a request that fully contains an existing reservation', () => {
		expect(
			intervalsOverlap(
				existing,
				window('2026-09-16T08:30:00Z', '2026-09-16T10:30:00Z'),
			),
		).toBe(true);
	});

	it('detects partial overlap on either boundary', () => {
		expect(
			intervalsOverlap(
				existing,
				window('2026-09-16T08:30:00Z', '2026-09-16T09:30:00Z'),
			),
		).toBe(true);
		expect(
			intervalsOverlap(
				existing,
				window('2026-09-16T09:30:00Z', '2026-09-16T10:30:00Z'),
			),
		).toBe(true);
	});

	it('allows adjacent reservations with touching boundaries', () => {
		expect(
			intervalsOverlap(
				existing,
				window('2026-09-16T08:00:00Z', '2026-09-16T09:00:00Z'),
			),
		).toBe(false);
		expect(
			intervalsOverlap(
				existing,
				window('2026-09-16T10:00:00Z', '2026-09-16T11:00:00Z'),
			),
		).toBe(false);
	});

	it('rejects malformed or non-positive reservation windows', () => {
		expect(() => parseReservationWindow('not-a-date', '2026-09-16T10:00:00Z')).toThrow();
		expect(() =>
			parseReservationWindow('2026-09-16T10:00:00Z', '2026-09-16T10:00:00Z'),
		).toThrow();
		expect(() =>
			parseReservationWindow('2026-09-16T11:00:00Z', '2026-09-16T10:00:00Z'),
		).toThrow();
	});

	it('builds the canonical database overlap predicate', () => {
		const requested = window('2026-09-16T09:15:00Z', '2026-09-16T09:45:00Z');
		expect(overlapWhere(requested)).toEqual({
			startTime: { lt: requested.end },
			endTime: { gt: requested.start },
		});
	});
});
