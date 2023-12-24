import { Profile } from "../dtos/Profile";

const profiles = [
  new Profile("1", "John", 20, "sdjchbsdj@gmail.com"),
  new Profile("2", "Saurav", 19, "sjdc@gmail.com"),
  new Profile("3", "Shashank", 18, "Shashank@gmail.com"),
  new Profile("4", "JJANN", 17, "jajasn@gmail.com"),
  new Profile("5", "Saumya", 16, "saumya@gmail.com"),
  new Profile("6", "Aditi", 15, "aditi@gmail.com"),
];

export async function getProfileById(id: string): Promise<Profile> {
  const profile = profiles.find((profile) => profile.id === id);
  return profile;
}

export async function createNewProfile(profile: Profile): Promise<Profile> {
  profiles.push(profile);
  return profile;
}

export async function updateProfile(
  id: string,
  profile: Profile
): Promise<Profile> {
  const index = profiles.findIndex((profile) => profile.id === id);
  console.log(index);
  if (index === -1) {
    throw new Error("Profile not found");
  }
  profiles[index] = profile;
  return profile;
}

export async function deleteProfileById(id: string): Promise<void> {
  const index = profiles.findIndex((profile) => profile.id === id);
  profiles.splice(index, 1);
}
