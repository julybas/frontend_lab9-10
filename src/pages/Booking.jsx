import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { trains } from "../data/trains";
import { getBookingsForTrain, saveBooking } from "../services/BookingService";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import "../App.css";

const Booking = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trains.find((t) => t.id === Number(trainId));

  const [selectedWagon, setSelectedWagon] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    setBookedSeats(
      getBookingsForTrain(trainId)
        .filter((b) => b.wagon === selectedWagon)
        .flatMap((b) => b.seats),
    );
    setSelectedSeats([]);
  }, [trainId, selectedWagon]);

  if (!train) return <p>Потяг не знайдено</p>;

  const toggleSeat = (s) => {
    if (!bookedSeats.includes(s)) {
      setSelectedSeats((prev) =>
        prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
      );
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedSeats.length) return toast.error("Оберіть хоча б одне місце!");

    const phoneRegex = /^\+?\d{10,13}$/;
    const cleanPhone = form.phone.replace(/[\s\-()]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      return toast.error("Hомер телефону +380...");
    }

    saveBooking({
      trainId,
      wagon: selectedWagon,
      seats: selectedSeats,
      user: form,
    });
    toast.success("Квитки успішно заброньовано!");
    navigate("/");
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">
        Поїзд №{train.number} ({train.from} — {train.to})
      </h2>

      <WagonSelector
        selectedWagon={selectedWagon}
        setSelectedWagon={setSelectedWagon}
      />

      <SeatMap
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
        toggleSeat={toggleSeat}
      />

      <BookingForm
        form={form}
        handleChange={handleChange}
        handleBooking={handleBooking}
        selectedCount={selectedSeats.length}
      />
    </div>
  );
};

export default Booking;
