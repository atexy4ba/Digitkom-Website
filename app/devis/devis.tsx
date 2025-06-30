// Ce fichier est obsolète et peut être supprimé. Le code de la page de devis est maintenant dans app/devis/page.tsx.

import React, { useState } from "react";

export default function DevisPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Ici, tu peux ajouter l'envoi à une API ou un email
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Demander un devis</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded text-center">Merci pour votre demande ! Nous vous contacterons rapidement.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label className="block mb-1 font-medium" htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" required className="w-full border rounded px-3 py-2" value={form.nom} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className="w-full border rounded px-3 py-2" value={form.email} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="telephone">Téléphone</label>
            <input type="tel" id="telephone" name="telephone" className="w-full border rounded px-3 py-2" value={form.telephone} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="service">Service souhaité</label>
            <select id="service" name="service" required className="w-full border rounded px-3 py-2" value={form.service} onChange={handleChange}>
              <option value="">Sélectionner un service</option>
              <option value="web">Création de site web</option>
              <option value="design">Web design</option>
              <option value="seo">SEO & Référencement</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full border rounded px-3 py-2" value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Envoyer la demande</button>
        </form>
      )}
    </div>
  );
}
