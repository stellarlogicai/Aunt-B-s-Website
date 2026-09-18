const BOOKING_METADATA = {
  leadSource: 'website',
  sourceDetail: 'auntbs_website_booking_request',
  leadStatus: 'new',
  requestType: 'booking_request',
};

export async function submitBookingRequest(payload) {
  const fullPayload = { ...BOOKING_METADATA, ...payload };

  const body = new URLSearchParams({
    'form-name': 'booking-request',
    ...Object.fromEntries(
      Object.entries(fullPayload).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(', ') : String(value ?? ''),
      ])
    ),
  }).toString();

  let response;
  try {
    response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
  } catch {
    throw new Error('Network error submitting booking request');
  }

  if (!response.ok) {
    throw new Error(`Booking request failed (status ${response.status})`);
  }

  return { ok: true };
}
