import React, { useState } from "react";
import TrainCard from "./TrainCard";
import { trains } from "../data/trains";

const FilterInput = ({
  field,
  value,
  onChange,
  type = "text",
  placeholder = "",
  extra = {},
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      {...extra}
    />
  </div>
);

const TrainList = () => {
  const [f, setF] = useState({
    query: "",
    from: "",
    to: "",
    date: "",
    time: "",
  });

  const updateF = (field, value) =>
    setF((prev) => ({ ...prev, [field]: value }));

  const filteredTrains = trains.filter((t) => {
    const match = (val, search) =>
      !search || (val && val.toLowerCase().includes(search.toLowerCase()));

    return (
      (match(t.number, f.query) ||
        match(t.from, f.query) ||
        match(t.to, f.query)) &&
      match(t.from, f.from) &&
      match(t.to, f.to) &&
      (!f.date || t.departureDate === f.date) &&
      (!f.time || (t.departureTime && t.departureTime.startsWith(f.time)))
    );
  });

  const hasFilters = f.from || f.to || f.date || f.time;

  return (
    <div>
      {/* Контент пошуку та картки */}
      <div>
        <div>
          <input
            type="text"
            placeholder="Пошук..."
            value={f.query}
            onChange={(e) => updateF("query", e.target.value)}
          />
        </div>

        <div>
          {trains.length === 0 ? (
            <p>Список потягів порожній.</p>
          ) : filteredTrains.length > 0 ? (
            filteredTrains.map((train) => (
              <TrainCard key={train.id} train={train} />
            ))
          ) : (
            <p>За заданими параметрами рейсів не знайдено</p>
          )}
        </div>
      </div>

      {/* Сайдбар з фільтрами */}
      <div>
        <div>
          <h3>Фільтрація</h3>
          {hasFilters && (
            <button
              onClick={() =>
                setF({ ...f, from: "", to: "", date: "", time: "" })
              }
            >
              Скинути
            </button>
          )}
        </div>

        <div>
          <FilterInput
            field="from"
            value={f.from}
            onChange={updateF}
            placeholder="Місто відправлення..."
          />
          <FilterInput
            field="to"
            value={f.to}
            onChange={updateF}
            placeholder="Місто прибуття..."
          />
          <FilterInput
            field="date"
            value={f.date}
            onChange={updateF}
            type="date"
          />
          <FilterInput
            field="time"
            value={f.time}
            onChange={updateF}
            placeholder="Година (напр. 14)"
            extra={{ maxLength: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainList;
