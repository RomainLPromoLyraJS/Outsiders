// Import package
import slugify from 'slugify';

// Create function to replace URL:id for URL:trip.title
// Transform trip title into slug
export const slugifyTitle = (title) => slugify(title, { lower: true });

//Adding /route before slugifyTitle
export const buildTripURL = (title) => `/sortie/${slugifyTitle(title)}`;

/** 
 * --FIND TRIP BY SLUG--
 * 
 * trip.title === (SLUG)trip-title
 */
export const getTripBySlug = (trips, slug) => (
  trips.find((trip) => slugifyTitle(trip.title) === slug)
);

/**
 * MAKE FULL NAME
 * simply make a full name when you a firstname and a lastname
 * 
 * @param {string} firstname 
 * @param {string} lastname 
 */
export const makeFullName = (firstname, lastname) => {
  return `${firstname} ${lastname}`;
};



