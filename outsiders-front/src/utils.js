// Import package
import slugify from 'slugify';


// Create function to replace URL:id for URL:trip.title
export const buildTripURL = (title) => `/sortie/${slugify(title, { lower: true })}`;