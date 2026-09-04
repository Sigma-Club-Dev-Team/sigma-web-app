"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../../sanity.config";

/**
 * Marks the client boundary so `sanity.config.ts` — and the whole `sanity`
 * package it drags in — never enters the React Server Components graph, where
 * the `react-server` export condition breaks some of Sanity's dependencies.
 */
export default function Studio() {
  return <NextStudio config={config} />;
}
