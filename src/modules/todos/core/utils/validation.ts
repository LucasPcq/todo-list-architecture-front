import { isValid } from "date-fns";

export const labelValidation = (label: string) => {
  if (!label) {
    return "Le champ titre est requis.";
  }

  if (label.length < 5 || label.length > 50) {
    return "Le titre doit être compris entre 2 et 50 caractères.";
  }

  return "";
};

export const endDateValidation = (date: string) => {
  if (!date) {
    return "Le champ date est requis.";
  }

  if (isValid(date)) {
    return "Le champ date n'est pas valide.";
  }

  return "";
};
