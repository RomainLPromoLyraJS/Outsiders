// Import package
import slugify from 'slugify';

// Create function to replace URL:id for URL:trip.title
// Transform trip title into slug
export const slugifyTitle = (title) => slugify(title, { lower: true });

//Adding /route(trip) before slugifyTitle
export const buildTripURL = (title) => `/sortie/${slugifyTitle(title)}`;

//Adding /route(categorie) before slugifyTitle
export const buildCatURL = (title) => `/categories/${slugifyTitle(title)}`;
/** 
 * --FIND TRIP BY SLUG--
 * 
 * trip.title === (SLUG)trip-title
 */
export const getTripBySlug = (trips, slug) => (
  trips.find((trip) => slugifyTitle(trip.title) === slug)
);
/** 
 * --FIND CATEGORY BY SLUG--
 * 
 * category.title === (SLUG)category-title
 */
export const getCatBySlug = (categories, slug) => (
  categories.find((category) => slugifyTitle(category.title) === slug)
);

/**
 * MAKE FULL NAME
 * simply make a full name when you a firstname and a lastname
 * @param {string} firstname 
 * @param {string} lastname 
 */
export const makeFullName = (firstname, lastname) => {
  return `${firstname} ${lastname}`;
};

/**
 * RANDOMIZE
 * return a random number between min and max
 * @param {int} min 
 * @param {int} max 
 */
export const randomize = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min ;
}
