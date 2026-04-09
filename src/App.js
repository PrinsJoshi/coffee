import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">My React Website</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Welcome 👋</h2>
          <p className="text-gray-600">
            Ye ek simple React web page hai jo Tailwind CSS se styled hai.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold">Feature 1</h3>
            <p className="text-sm text-gray-500">Fast & responsive design</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold">Feature 2</h3>
            <p className="text-sm text-gray-500">Easy to customize</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold">Feature 3</h3>
            <p className="text-sm text-gray-500">Clean UI</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2026 My Website
      </footer>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    flexDirection: "row",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemC: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default App;
