import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

export default function Home() {
  return <Redirect href={"/(tabs)"} />;
}

const styles = StyleSheet.create({});
