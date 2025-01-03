import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'eaPurple': {
          '50': '#faf7fc',
          '100': '#f5eef9',
          '200': '#e9dcf2',
          '300': '#d9c1e6',
          '400': '#c39bd7',
          '500': '#a873c2',
          '600': '#8f57a9',
          '700': '#744388',
          '800': '#60396f',
          '900': '#51325d',
          '950': '#31183a',
          DEFAULT: '#8f57a9',
        },
        'eaGrey': {
          '50': '#f6f7f9',
          '100': '#eceff2',
          '200': '#d6dae1',
          '300': '#b1bbc8',
          '400': '#8796a9',
          '500': '#607083',
          '600': '#536276',
          '700': '#444f60',
          '800': '#3b4451',
          '900': '#343b46',
          '950': '#23272e',
          DEFAULT: '#60708c',
        },
        'eaGreen': {
          '50': '#f4f9f4',
          '100': '#e7f2e6',
          '200': '#d0e4ce',
          '300': '#aacea7',
          '400': '#7db078',
          '500': '#5c9657',
          '600': '#467742',
          '700': '#395f36',
          '800': '#314c2f',
          '900': '#293f28',
          '950': '#132112',
          DEFAULT: '#5c9657',
        },
        'eaOrange': {
          '50': '#fff3ed',
          '100': '#ffe3d4',
          '200': '#ffc2a8',
          '300': '#ff9871',
          '400': '#ff663d',
          '500': '#fe3911',
          '600': '#ef2007',
          '700': '#c61208',
          '800': '#9d110f',
          '900': '#7e1210',
          '950': '#440608',
          DEFAULT: '#ff663d',
        },
        'eaLightBlue': {
          '50': '#f2f7fc',
          '100': '#e2edf7',
          '200': '#c7def0',
          '300': '#a8cde8',
          '400': '#7fb3db',
          '500': '#6198d0',
          '600': '#4d80c3',
          '700': '#436db2',
          '800': '#3b5a92',
          '900': '#344c74',
          '950': '#cf7ef0',
          DEFAULT: '#c7def0',
        },
        'eaLavender': {
          '50': '#fbf8fc',
          '100': '#f6eef9',
          '200': '#f0e0f4',
          '300': '#e3c7eb',
          '400': '#d0a3dd',
          '500': '#c28ad1',
          '600': '#a963ba',
          '700': '#924fa1',
          '800': '#7a4485',
          '900': '#63386b',
          '950': '#441f4c',
          DEFAULT: '#c28ad1',
        },
        'eaMediumBlue': {
          '50': '#f4f7fa',
          '100': '#e5eaf4',
          '200': '#d1dbec',
          '300': '#b3c5df',
          '400': '#8ca6ce',
          '500': '#718ac0',
          '600': '#5e73b2',
          '700': '#5363a2',
          '800': '#485285',
          '900': '#3d466b',
          '950': '#292d42',
          DEFAULT: '#b3c5df',
        },
        'eaOffWhiteSand': {
          DEFAULT: '#f9f8f2',
        },
        'eaDustyBlack': {
          DEFAULT: '#131313',
        },
    
      }
    }
  },

  plugins: [typography, forms, containerQueries],
} satisfies Config;
