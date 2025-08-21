const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"; 
// 👆 You can set NEXT_PUBLIC_API_URL in .env

// Generic GET request
export async function apiGet<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    cache: "no-store", // Always fetch fresh data (SSR)
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

// Example: Fetch events
export async function getEvents() {
  return apiGet<{ id: number; title: string; date: string }[]>("/api/events");
}

// Example: Fetch single event
export async function getEvent(id: number) {
  return apiGet<{ id: number; title: string; date: string; description: string }>(
    `/api/events/${id}`
  );
}
