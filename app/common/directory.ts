export type Contact = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
};

export type Profile = Contact & {
  coverImageUrl: string;
  about: string;
  fields: Record<string, string>;
};

export type Contacts = {
  [key in string]: Contact[];
};
