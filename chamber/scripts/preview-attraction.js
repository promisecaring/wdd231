// Fetch the full attractions list
export async function fetchAttractions() {
  const url = 'data/items.json';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching attractions:", error);
    return [];
  }
}



// Load 3–6 attractions on the homepage
export async function loadAttractionPreview() {
  const previewContainer = document.getElementById("attractions-preview");
  if (!previewContainer) return;

  const items = await fetchAttractions();
  if (!items || items.length === 0) return;

  // limit results to 3–6
  const limited = items.slice(0, 6);

  limited.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("attraction-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;

    previewContainer.appendChild(card);
  });
}