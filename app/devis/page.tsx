"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  nom: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  service: z.string().min(2, "Sélectionnez un service"),
  message: z.string().min(5, "Le message est requis"),
});

type FormData = z.infer<typeof formSchema>;

export default function DevisPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      service: "",
      message: "",
    },
  });
  const [submitted, setSubmitted] = React.useState(false);

  function onSubmit(data: FormData) {
    setSubmitted(true);
    // Ici, tu peux ajouter l'envoi à une API ou un email
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Demander un devis</h1>
          {submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded text-center">Merci pour votre demande ! Nous vous contacterons rapidement.</div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-8 rounded-xl shadow-xl border bg-gradient-to-br from-violet-50 via-white to-purple-100">
                <FormField name="nom" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="email" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Votre email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="telephone" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Votre téléphone (optionnel)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="service" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service souhaité</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Web design, SEO..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="message" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Décrivez votre projet ou demande..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-violet-600 hover:to-purple-700 transition">Envoyer la demande</Button>
              </form>
            </Form>
          )}
        </div>
      </section>
      <footer className="bg-slate-900 text-white py-12 lg:py-16 mt-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6 lg:p-8">
                <Phone className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="font-semibold mb-2 text-white">Appelez-nous</h3>
                <p className="text-slate-300">+213 123 456 789</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6 lg:p-8">
                <Mail className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="font-semibold mb-2 text-white">Écrivez-nous</h3>
                <p className="text-slate-300">contact@digikom.com</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6 lg:p-8">
                <MapPin className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="font-semibold mb-2 text-white">Visitez-nous</h3>
                <p className="text-slate-300">Alger, Algérie</p>
              </CardContent>
            </Card>
          </div>
          <div className="border-t border-slate-800 pt-6 lg:pt-8 text-center">
            <p className="text-slate-400">© 2024 Digikom. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
