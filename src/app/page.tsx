"use client";
import data from "@/app/data/data.json";
import List from "@/Components/List";
import Navbar from "@/Components/Navbar";
import { useState } from "react";
export default function Home() {
  const [extensions, setExtentions] = useState(
    data.map((ext, index) => ({
      id: index + 1,
      ...ext,
    }))
  );
  const [filter, setFilter] = useState("All");
  const handleRemove = (id: number) => {
    setExtentions(extensions.filter((ext) => ext.id !== id));
  };
  const handleToggle = (id: number) => {
    setExtentions(
      extensions.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };
  const noFilter = () => setFilter("All");
  const activeFilter = () => setFilter("Active");
  const inactiveFilter = () => setFilter("Inactive");
  const filteredExtensions =
    filter === "Active"
      ? extensions.filter((ext) => ext.isActive)
      : filter === "Inactive"
      ? extensions.filter((ext) => !ext.isActive)
      : extensions;
  return (
    <main className="min-h-screen p-8 m-12">
      <Navbar />
      <List
        extensions={filteredExtensions}
        onRemove={handleRemove}
        onToggle={handleToggle}
        noFilter={noFilter}
        activeFilter={activeFilter}
        inactiveFilter={inactiveFilter}
        Filter={filter}
      />
    </main>
  );
}
