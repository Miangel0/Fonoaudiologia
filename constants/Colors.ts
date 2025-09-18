// constants/Colors.ts
export const Colors = {
  // Colores principales para lactancia materna
  primary: '#E91E63', // Rosa maternal
  primaryDark: '#C2185B',
  primaryLight: '#F8BBD9',
  
  // Colores secundarios
  secondary: '#2E8B57', // Verde natural
  secondaryDark: '#1F5F3F',
  secondaryLight: '#A8D8BC',
  
  // Colores de la UI
  background: '#FFFFFF',
  surface: '#F5F5F5',
  card: '#FFFFFF',
  
  // Colores de texto
  text: '#212121',
  textSecondary: '#666666',
  textLight: '#999999',
  placeholder: '#BDBDBD',
  
  // Colores de estado
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Colores neutros
  white: '#FFFFFF',
  black: '#000000',
  gray: '#666666',
  lightGray: '#E0E0E0',
  darkGray: '#424242',
  
  // Colores específicos para tabs
  tabActive: '#E91E63',
  tabInactive: '#999999',
  tabBackground: '#FFFFFF',
  
  // Colores para header
  headerBackground: '#E91E63',
  headerText: '#FFFFFF',
  
  // Colores para botones
  buttonPrimary: '#E91E63',
  buttonSecondary: '#2E8B57',
  buttonDisabled: '#BDBDBD',
  
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