import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.phone.trim()) newErrors.phone = "El número es obligatorio.";
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio.";
    if (!formData.message.trim())
      newErrors.message = "El mensaje es obligatorio.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Si hay errores, no envía el formulario

    const serviceID = "service_7yoowpm";
    const templateID = "template_xckv9vb";
    const userID = "3NncCShnGxHSd2PsH";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        // Redirigir a la página de éxito automáticamente
        window.location.href = "/success";
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <h1> Contactanos</h1>
        <label htmlFor="name">Nombres Completos:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="phone">Número:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.phone && <p style={styles.error}>{errors.phone}</p>}
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />
        {errors.message && <p style={styles.error}>{errors.message}</p>}
      </div>

      <button type="submit" style={styles.button}>
        Enviar
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    background: "#f9f9f9",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    height: "100px",
    resize: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#0174B7",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
};

export default ContactForm;
