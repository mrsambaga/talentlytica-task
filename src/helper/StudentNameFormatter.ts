export const ChangeStudentNameFormatToJSON = (name: string) => {
  const newName = name.toLowerCase().replace(" ", "_");
  return newName;
};
