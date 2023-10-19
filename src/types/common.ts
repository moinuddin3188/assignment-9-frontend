export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

type IErrorMessage = {
  path: string | number;
  message: string;
};

export type ResponseErrorType = {
  statusCode: number;
  message: string;
  errorMessages: IErrorMessage[];
};

export interface IUser {
  address: string;
  contactNo: string;
  createdAt: string;
  email: string;
  faceBookIdLink: string;
  firstName: string;
  gender: string;
  id: string;
  instaIdLink: string;
  lastName: string;
  profile: string;
  role: string;
  updatedAt: string;
  whatsAppNumber: string;
}

export interface ICategory {
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
}

export interface IService {
  id: string;
  title: string;
  description: string;
  price: number;
  status: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  category: ICategory;
  image: string;
}

export interface IBlogComment {
  id: string;
  name: string;
  email: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  blog: IBlog;
}

export interface IBlog {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  status: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  cover: string;
  comments: IBlogComment
}

export interface IFAQs {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export interface IReview {
  id: string;
  content: string;
  rating: number;
  user: IUser;
  service: IService;
  createdAt: string;
  updatedAt: string;
}

export interface IBooking {
  id: string;            // Unique ID for the booking.
  bookingDate: string;   // The date of the booking.
  contactNo: string;     // Contact number of the customer.
  address: string;       // The customer's address.
  status: string; // Booking status, e.g., PENDING, CONFIRMED, COMPLETED, etc.
  createdAt: Date;       // Date and time when the booking was created.
  updatedAt: Date;       // Date and time when the booking was last updated.
  
  productDetail: string;   // Details of the product for repair or service.
  problem: string;         // Description of the problem with the product.
  request: string;         // Any special requests or instructions.
  faceBookIdLink: string | null; // Optional Facebook ID link.
  whatsAppNumber: string;       // WhatsApp contact number.
  paymentStatus: boolean;       // Payment status, true if paid, false otherwise.
  
  userId: string;     // ID of the user who made the booking.
  user: IUser;         // User details related to the booking.
  
  serviceId: string;  // ID of the service associated with the booking.
  service: IService;  // Service details related to the booking.
}

