# What is the use of the keyof keyword in TypeScript? Provide an example.

টাইপস্ক্রিপ্টে আমরা যখন টাইপ ডিক্লেয়ার করি তখন এইগুলা মুলত key এবং value জোড়া হিসেবে থাকে। keyof keyword দিয়ে আমরা সেই সব key গুলো এক্সেস করতে পারি। ধরি আমাদের একটা অবজেক্ট আছে।

```ts
type Employee = {
  id: number;
  name: string;
  address: string;
  isMarried: boolean;
};
```

এখানে id, name, address, isMarried সবগুলো হলো key এবং আমরা keyof Employee করলে সবগুলো key ব্যাবহার করতে পারবো আমাদের প্রয়োজন অনুযায়ী।

```ts
const employee1: Employee = {
  id: 123,
  name: "Sohel",
  address: "Bangladesh",
  isMarried: true,
};
const getPropertiesFromObj = (obj: Employee, key: keyof Employee) => {
  return obj[key];
};
```

keyof মাধ্যমে key এর মধ্য আমরা সব keyword গুলো পাবো। এবং সেই key গুলো ব্যাবহার করে অবজেক্ট নোটেশনের ম্যাধ্যমে আমরা ভ্যালু গুলো এক্সেস করতে পারবো। এছাড়া আমাদের প্রয়োজন অনুযায়ী আমরা key গুলো উসজ করতে পারি।
