// constants/Colors.ts
type ColorScheme = 'light' | 'dark';

const COMMON_COLORS = {
  primary: '#E91E63',
  primaryDark: '#C2185B',
  primaryLight: '#F8BBD9',
  secondary: '#2E8B57',
  secondaryDark: '#1F5F3F',
  secondaryLight: '#A8D8BC',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  white: '#FFFFFF',
  black: '#000000',
};

export const Colors: Record<ColorScheme, any> = {
  light: {
    tint: '#E91E63',
    tabIconDefault: '#999999',
    text: '#212121',
    textSecondary: '#666666',
    textLight: '#999999',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    card: '#FFFFFF',
    border: '#E0E0E0',
    ...COMMON_COLORS,
  },
  dark: {
    tint: '#E91E63',
    tabIconDefault: '#CCCCCC',
    text: '#FFFFFF',
    textSecondary: '#CCCCCC',
    textLight: '#999999',
    background: '#121212',
    surface: '#1E1E1E',
    card: '#242424',
    border: '#333333',
    ...COMMON_COLORS,
  },
} as const;

// Tipo para autocompletar colores
export type ColorKey = keyof typeof Colors;

// Colores por tema (si quieres soporte para tema oscuro más adelante)
export const lightTheme = {
  ...Colors,
};

export const darkTheme = {
  ...Colors,
  background: '#121212',
  surface: '#1E1E1E',
  card: '#2D2D2D',
  text: '#FFFFFF',
  textSecondary: '#CCCCCC',
};

// Exportación por defecto
export default Colors;