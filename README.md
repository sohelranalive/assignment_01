## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

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

## 5. Provide an example of using union and intersection types in TypeScript.

Union ( & ) এবং intersection (I) আমরা টাইপ ডিক্লেয়ার করার সময় ইউজ করে থাকি।

```ts
//Intersection Type:

type UserRole = "Admin" | "User";
```

intersection মুলত বোঝায় হয় এইটা না হয় অন্যটা। এখানে userRole নামে যে টাইপ তৈরি করা হয়েছে সেইটা আমরা অন্য কোন ইউজার টাইপ ভ্যালিডেট করার সময় যেকোন এক টাইপের হলে
এখানে আর type error আসবে না।

```ts
//union Type:

type Person = {
  name: string;
  address: number;
};

type Employee = {
  id: number;
  department: string;
};

type JobHolder = Person & Employee;
```

এখানে আমরা JobHolder নামে একটা type তৈরি করেছি যেইটা Person এবং Employee টাইপ দুটো কে ইউনিয়ন করে। আমরা যদি এখন কোন অবজেক্ট ভ্যালিডেট করি JonHolder টাইপ দিয়ে
তাহলে আমাদের সেই অব্জেক্টে person and employee দুটোর সবগুলো properties থাকতে হবে। এটাই মুলত ইউনিয়ন টাইপ।
