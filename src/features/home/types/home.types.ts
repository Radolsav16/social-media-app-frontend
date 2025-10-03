export  namespace HomeTypes {
  export interface SuggestedUser {
    id: string;
    name: string;
    avatar: string;
  }

  // Feature card
  export interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
  }

  // Call To Action section
  export interface CallToAction {
    heading: string;
    text: string;
     buttons:['Sign in','Sign up']
  }

  // Testimonial card
  export interface Testimonial {
    id: number;
    name: string;
    username: string;
    avatar: string;
    quote: string;
  }

  // Home Page Data
  export interface InitialState {
    trendingTopics: string[];
    suggestedUsers: SuggestedUser[];
    title: string;
    subTitle: string;
    buttonsTexts: string[];
    features: Feature[];
    callToAction: CallToAction;
    testimonials: Testimonial[];
  }
}
