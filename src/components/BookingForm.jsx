import React from "react";

const BookingForm = ({ form, handleChange, handleBooking, selectedCount }) => {
  return (
    <form onSubmit={handleBooking} className="booking-form">
      <input
        type="text"
        name="name"
        placeholder="Прізвище та ім'я"
        className="uz-input"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон (+380...)"
        className="uz-input"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email для квитків"
        className="uz-input"
        value={form.email}
        onChange={handleChange}
        required
      />
      <button type="submit" className="submit-btn">
        Оформити квитки ({selectedCount} шт.)
      </button>
    </form>
  );
};

export default BookingForm;
