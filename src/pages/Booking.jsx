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

  return (
    <div>
      <h2>
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
