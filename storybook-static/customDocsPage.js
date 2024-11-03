// CustomDocsPage.js
import React from "react";

const CustomDocsPage = ({ context }) => {
  const { title } = context; // Extract the title from the context

  return (
    <div className="prose prose-lg mx-auto my-6 px-4">
      <header className="mb-6 border-b border-slate-300 pb-4">
        <h1 className="text-primary-800 font-bold text-3xl">{title}</h1>
        <p className="text-slate-600 text-lg">
          Add your custom description or header content here.
        </p>
      </header>
      {/* Render the main content of the docs */}
      <main className="story-content">
        {context.storyById(context.id).render()}
      </main>
    </div>
  );
};

export default CustomDocsPage;
