import React, { useState } from "react";
import TrainCard from "./TrainCard";
import { trains } from "../data/trains";

const FilterInput = ({
  label,
  field,
  value,
  onChange,
  type = "text",
  placeholder = "",
  extra = {},
}) => (
  <div>
    <label className="uz-label">{label}</label>
    <input
      type={type}
      className="uz-input"
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
    <div className="uz-layout">
      {/* ліва частина*/}
      <div className="uz-main-content">
        <div className="uz-main-search">
          <input
            type="text"
            className="uz-input uz-search-input"
            placeholder="Пошук..."
            value={f.query}
            onChange={(e) => updateF("query", e.target.value)}
          />
        </div>

        <div className="uz-grid">
          {trains.length === 0 ? (
            <p className="uz-empty-text">Список потягів порожній.</p>
          ) : filteredTrains.length > 0 ? (
            filteredTrains.map((train) => (
              <TrainCard key={train.id} train={train} />
            ))
          ) : (
            <p className="uz-empty-text">
              За заданими параметрами рейсів не знайдено
            </p>
          )}
        </div>
      </div>

      {/* Сайдбар */}
      <div className="uz-sidebar">
        <div className="uz-sidebar-header">
          <h3 className="uz-sidebar-title">Фільтрація</h3>
          {hasFilters && (
            <button
              className="uz-reset-btn"
              onClick={() =>
                setF({ ...f, from: "", to: "", date: "", time: "" })
              }
            >
              Скинути
            </button>
          )}
        </div>

        <div className="uz-filters">
          <FilterInput
            label="Звідки"
            field="from"
            value={f.from}
            onChange={updateF}
            placeholder="Місто відправлення..."
          />
          <FilterInput
            label="Куди"
            field="to"
            value={f.to}
            onChange={updateF}
            placeholder="Місто прибуття..."
          />
          <FilterInput
            label="Дата відправлення"
            field="date"
            value={f.date}
            onChange={updateF}
            type="date"
          />
          <FilterInput
            label="Година відправлення"
            field="time"
            value={f.time}
            onChange={updateF}
            placeholder="Година"
            extra={{ maxLength: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainList;
