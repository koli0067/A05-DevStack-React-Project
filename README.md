*// Dev Stack Curator
An interactive, responsive, and modern web application designed to help developers explore, select, and build their customized technology stack for software development.

*// Technologies Used
Frontend Framework: React.js (TypeScript)

* Styling: Tailwind CSS

* Icons & UI: React Icons

* Notifications: React Toastify

* Build Tool: Vite

 *// Key Features
Interactive Technology Grid: Browse through a curated collection of modern tools and frameworks with detailed card views, difficulty levels, and visual category badges.

Real-time Stack Management: Effortlessly add items to your custom stack or remove them with smooth UI state updates and instant toast notifications.

Dynamic Sidebar & Empty State: A modern sidebar layout that dynamically counts selected technologies, handles singular/plural formatting, and offers a clean empty state with quick "Remove All" actions.



1//. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like elements directly inside JavaScript code. It is used in React because it makes UI code much easier to write, read, and maintain alongside component logic.

2//. What is the difference between props and state?
Props(Properties):  Read-only data passed down from a parent component to a child component. A child component cannot modify its props.
State:  Internal data managed within a component that can change over time (e.g., user input or clicks). When state changes, React re-renders the component.

3//.  What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and manage local state. In this project, it was used in `App.tsx` to hold and update the array of selected technologies (`selectedStack`).

 4//.  What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in React, such as fetching data or subscribing to events. It was needed to fetch and load the initial technology data from the local JSON file when the app first loads (mounts).

5//.  Why does every item in a `.map()` list need a unique `key` prop?
React uses the `key` prop to identify which items in a list have been changed, added, or removed. It helps React optimize performance by re-rendering only the specific updated items instead of the whole list.

6//.  What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on specific conditions or state values.

Example from `SelectedCart.tsx`:

```tsx
{selectedStack.length === 0 ? (
  <p className="text-gray-400">Your stack is empty.</p>
) : (
  <p className="text-gray-500">{selectedStack.length} technologies selected.</p>
)}

7//. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Passed directly via props.

Child to Parent: The parent passes a callback function (or state setter function like setSelectedStack) as a prop to the child. The child then executes this function with data to update the parent's state.



