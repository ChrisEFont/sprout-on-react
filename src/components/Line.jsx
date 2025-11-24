import './line.css';
import './AddButton';
import { useState, useEffect } from 'react';
import { AddButton } from './AddButton';

export function EmptyLine(props) {
  // 🟢 Todos tus useState igual que antes
  const [saleType, setSaleType] = useState("0");
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");
  const [contract, setContract] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [listPrice, setListPrice] = useState("");
  const [totalListPrice, setTotalListPrice] = useState("");
  const [coterm, setCoterm] = useState("0");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cotermListPrice, setCotermListPrice] = useState("");
  const [totalCotermListPrice, setTotalCotermListPrice] = useState("");
  const [rhDiscount, setRhDiscount] = useState(0);
  const [transferDiscount, setTransferDiscount] = useState(false);
  const [nxDiscount, setNxDiscount] = useState(0);
  const [customerPrice, setCustomerPrice] = useState("");
  const [totalCustomerPrice, setTotalCustomerPrice] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [profit, setProfit] = useState(0);

  // 🧱 Paso 1: crear la función para enviar los datos al padre
  function handleAddLine() {
    const newLine = {
      saleType,
      sku,
      description,
      contract,
      quantity,
      listPrice,
      totalListPrice,
      coterm,
      startDate,
      endDate,
      cotermListPrice,
      totalCotermListPrice,
      rhDiscount,
      transferDiscount,
      nxDiscount,
      customerPrice,
      totalCustomerPrice,
      totalCost,
      profit,
    };

    props.addLine(newLine); // 👈 envía el objeto al padre

    // 🧹 Limpieza: resetea todos los campos para nueva entrada
    setSaleType("0");
    setSku("");
    setDescription("");
    setContract("");
    setQuantity(0);
    setListPrice("");
    setTotalListPrice("");
    setCoterm("0");
    setStartDate("");
    setEndDate("");
    setCotermListPrice("");
    setTotalCotermListPrice("");
    setRhDiscount(0);
    setTransferDiscount(false);
    setNxDiscount(0);
    setCustomerPrice("");
    setTotalCustomerPrice("");
    setTotalCost("");
    setProfit(0);
  }

  return (
    <div className="line" data-added="false">
      <span className="index"></span>

      {/* Todos tus inputs igual que antes */}
      <select value={saleType} onChange={e => setSaleType(e.target.value)}>
        <option value="0">REN</option>
        <option value="1">NEW</option>
      </select>

      <input type="text" className="sku" placeholder='sku...' value={sku} onChange={e => setSku(e.target.value)} />
      <input type="text" className="description" placeholder='description...' value={description} onChange={e => setDescription(e.target.value)} />
      <input type="text" className="contract" placeholder='contract...' value={contract} onChange={e => setContract(e.target.value)} />
      <input type="number" className="quantity" placeholder='qty...' value={quantity} onChange={e => setQuantity(e.target.value)} />

      {/* ... todos los demás inputs iguales ... */}

      {/* 🔘 Botón para agregar la línea */}
      <AddButton onClick={handleAddLine} />
    </div>
  );
}