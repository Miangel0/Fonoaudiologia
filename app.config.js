const path = require('path');
const appJson = require('./app.json');

// Carga .env en tiempo de configuración (Expo Go + builds)
require('@expo/env').load(path.resolve(__dirname));

module.exports = {
  expo: {
    ...appJson.expo,
    extra: {
      ...appJson.expo.extra,
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
};
