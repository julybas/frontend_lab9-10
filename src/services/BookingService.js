const STORAGE_KEY = "uz_bookings";

export const getBookings = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const getBookingsForTrain = (trainId) => {
  return getBookings().filter((b) => b.trainId === trainId);
};

export const saveBooking = (bookingData) => {
  const bookings = getBookings();
  const newBooking = { ...bookingData, id: Date.now() };
  bookings.push(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  return newBooking;
};
