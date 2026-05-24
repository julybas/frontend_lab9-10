import React from "react";

const BookingForm = ({ form, handleChange, handleBooking, selectedCount }) => {
  return (
    <form onSubmit={handleBooking}>
      <input
        type="text"
        name="name"
        placeholder="Прізвище та ім'я"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон (+380...)"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email для квитків"
        value={form.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Оформити квитки ({selectedCount} шт.)</button>
    </form>
  );
};

export default BookingForm;
