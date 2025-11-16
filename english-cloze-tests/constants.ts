import type { ClozeTestDataType } from './types';

export const CLOZE_TESTS: ClozeTestDataType[] = [
  {
    id: 1,
    title: 'Bài 1: The Importance of Sleep',
    passage: 'Sleep is a vital process that plays a key __BLANK_17__ in maintaining good health and allowing your body to rest and repair. When you sleep, your brain is actually highly active, consolidating memories and processing information __BLANK_18__. Lack of sleep, __BLANK_19__, can lead to serious health problems, including weakened immune function and poor concentration. It is recommended that adults __BLANK_20__ for about 7-9 hours per night. Establishing a consistent sleep routine is one of the best ways to ensure you get the quality rest __BLANK_21__ body needs. Furthermore, reducing exposure to screens before bedtime can greatly improve your __BLANK_22__ to fall asleep quickly.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'part' }, { letter: 'B', text: 'side' }, { letter: 'C', text: 'section' }, { letter: 'D', text: 'form' }], correctAnswer: 'A' },
      { id: 18, choices: [{ letter: 'A', text: 'also' }, { letter: 'B', text: 'too' }, { letter: 'C', text: 'as well' }, { letter: 'D', text: 'either' }], correctAnswer: 'C' },
      { id: 19, choices: [{ letter: 'A', text: 'therefore' }, { letter: 'B', text: 'moreover' }, { letter: 'C', text: 'however' }, { letter: 'D', text: 'despite' }], correctAnswer: 'C' },
      { id: 20, choices: [{ letter: 'A', text: 'sleep' }, { letter: 'B', text: 'slept' }, { letter: 'C', text: 'to sleep' }, { letter: 'D', 'text': 'sleeping' }], correctAnswer: 'A' },
      { id: 21, choices: [{ letter: 'A', text: 'which' }, { letter: 'B', text: 'where' }, { letter: 'C', text: 'that' }, { letter: 'D', text: 'its' }], correctAnswer: 'C' },
      { id: 22, choices: [{ letter: 'A', text: 'ability' }, { letter: 'B', text: 'able' }, { letter: 'C', text: 'enabling' }, { letter: 'D', text: 'disabled' }], correctAnswer: 'A' },
    ],
  },
  {
    id: 2,
    title: 'Bài 2: The World of Coffee',
    passage: 'Coffee is one of the most popular beverages in the world, with billions of cups __BLANK_17__ every day. The journey of a coffee bean begins with the cultivation of coffee plants, __BLANK_18__ thrive in tropical climates. Once the coffee cherries are harvested, the seeds (or beans) are extracted and processed. Roasting is a crucial step, __BLANK_19__ determines the flavor profile of the final product. Different roasting levels, from light to dark, __BLANK_20__ different characteristics. __BLANK_21__ its widespread popularity, many consumers are becoming increasingly __BLANK_22__ of the ethical and environmental aspects of coffee production.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'drink' }, { letter: 'B', text: 'drunk' }, { letter: 'C', text: 'drinking' }, { letter: 'D', text: 'to drink' }], correctAnswer: 'B' },
      { id: 18, choices: [{ letter: 'A', text: 'who' }, { letter: 'B', text: 'which' }, { letter: 'C', text: 'where' }, { letter: 'D', text: 'when' }], correctAnswer: 'B' },
      { id: 19, choices: [{ letter: 'A', text: 'who' }, { letter: 'B', text: 'which' }, { letter: 'C', text: 'what' }, { letter: 'D', text: 'why' }], correctAnswer: 'B' },
      { id: 20, choices: [{ letter: 'A', text: 'results in' }, { letter: 'B', text: 'brings about' }, { letter: 'C', text: 'leads to' }, { letter: 'D', text: 'yields' }], correctAnswer: 'D' },
      { id: 21, choices: [{ letter: 'A', text: 'Because' }, { letter: 'B', text: 'Due to' }, { letter: 'C', text: 'In spite of' }, { letter: 'D', text: 'Despite' }], correctAnswer: 'B' },
      { id: 22, choices: [{ letter: 'A', text: 'awareness' }, { letter: 'B', text: 'aware' }, { letter: 'C', text: 'aware of' }, { letter: 'D', text: 'consciously' }], correctAnswer: 'B' },
    ],
  },
  {
    id: 3,
    title: 'Bài 3: Social Media and Communication',
    passage: 'Social media platforms have dramatically changed the way we communicate and __BLANK_17__ with others. They allow us to instantly share photos, updates, and news with friends and family __BLANK_18__ the globe. __BLANK_19__ these benefits, the rise of social media has also raised concerns about privacy and mental health. Spending too much time scrolling can __BLANK_20__ to feelings of isolation and anxiety. It is important to use these platforms responsibly and to set boundaries. __BLANK_21__, many schools are now teaching digital literacy to help students navigate the complexities of online __BLANK_22__.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'to interact' }, { letter: 'B', text: 'interact' }, { letter: 'C', text: 'interacting' }, { letter: 'D', text: 'interaction' }], correctAnswer: 'B' },
      { id: 18, choices: [{ letter: 'A', text: 'over' }, { letter: 'B', text: 'across' }, { letter: 'C', text: 'among' }, { letter: 'D', text: 'through' }], correctAnswer: 'B' },
      { id: 19, choices: [{ letter: 'A', text: 'Despite' }, { letter: 'B', text: 'Although' }, { letter: 'C', text: 'Because of' }, { letter: 'D', text: 'Therefore' }], correctAnswer: 'A' },
      // FIX: Added missing 'text' property for choice 'C' to match the Choice interface.
      { id: 20, choices: [{ letter: 'A', text: 'bring' }, { letter: 'B', text: 'result' }, { letter: 'C', text: 'cause' }, { letter: 'D', text: 'lead' }], correctAnswer: 'D' },
      { id: 21, choices: [{ letter: 'A', text: 'In addition' }, { letter: 'B', text: 'However' }, { letter: 'C', text: 'Otherwise' }, { letter: 'D', text: 'For example' }], correctAnswer: 'A' },
      { id: 22, choices: [{ letter: 'A', text: 'world' }, { letter: 'B', text: 'sphere' }, { letter: 'C', text: 'environment' }, { letter: 'D', text: 'situation' }], correctAnswer: 'C' },
    ],
  },
  {
    id: 4,
    title: 'Bài 4: Renewable Energy',
    passage: 'As the world faces the challenges of climate change, the demand for renewable energy __BLANK_17__ increasing rapidly. Sources like solar, wind, and hydropower __BLANK_18__ unlimited and produce little to no greenhouse gas emissions. Solar panels, for __BLANK_19__, convert sunlight directly into electricity. Although the initial setup cost for these technologies can be high, they become more economical __BLANK_20__ time. Governments worldwide are investing heavily in renewable energy projects __BLANK_21__ their reliance on fossil fuels. This transition is not only essential for environmental health __BLANK_22__ for creating a sustainable economic future.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'is' }, { letter: 'B', text: 'are' }, { letter: 'C', text: 'was' }, { letter: 'D', text: 'were' }], correctAnswer: 'A' },
      { id: 18, choices: [{ letter: 'A', text: 'is' }, { letter: 'B', text: 'are' }, { letter: 'C', text: 'has been' }, { letter: 'D', text: 'will be' }], correctAnswer: 'B' },
      { id: 19, choices: [{ letter: 'A', text: 'instance' }, { letter: 'B', text: 'case' }, { letter: 'C', text: 'effect' }, { letter: 'D', text: 'result' }], correctAnswer: 'A' },
      // FIX: Added missing 'text' property for choice 'C' to match the Choice interface.
      { id: 20, choices: [{ letter: 'A', text: 'with' }, { letter: 'B', text: 'over' }, { letter: 'C', text: 'for' }, { letter: 'D', text: 'through' }], correctAnswer: 'B' },
      { id: 21, choices: [{ letter: 'A', text: 'to reduce' }, { letter: 'B', text: 'reducing' }, { letter: 'C', text: 'reduce' }, { letter: 'D', text: 'reduced' }], correctAnswer: 'A' },
      { id: 22, choices: [{ letter: 'A', text: 'also' }, { letter: 'B', text: 'but' }, { letter: 'C', text: 'as well' }, { letter: 'D', text: 'and' }], correctAnswer: 'B' },
    ],
  },
  {
    id: 5,
    title: 'Bài 5: The Discovery of Penicillin',
    passage: 'The discovery of penicillin by Alexander Fleming in 1928 is considered one of the most important milestones in medical history. Fleming noticed that a mold, Penicillium notatum, __BLANK_17__ growing on a culture dish had killed the bacteria around it. He realized that this mold __BLANK_18__ a substance that could fight infection. __BLANK_19__ his initial findings, it took more than a decade for penicillin to be developed into a usable drug. The large-scale production of penicillin during World War II saved countless __BLANK_20__. The development of antibiotics __BLANK_21__ the way for modern medicine, allowing doctors to treat previously fatal diseases. __BLANK_22__, the overuse of antibiotics today has led to the problem of drug-resistant bacteria.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'which' }, { letter: 'B', text: 'that' }, { letter: 'C', text: 'who' }, { letter: 'D', text: 'what' }], correctAnswer: 'A' },
      { id: 18, choices: [{ letter: 'A', text: 'produced' }, { letter: 'B', text: 'production' }, { letter: 'C', text: 'producing' }, { letter: 'D', text: 'produce' }], correctAnswer: 'A' },
      { id: 19, choices: [{ letter: 'A', text: 'Despite' }, { letter: 'B', text: 'Although' }, { letter: 'C', text: 'Because' }, { letter: 'D', text: 'Due to' }], correctAnswer: 'A' },
      // FIX: Added missing 'text' property for choice 'C' to match the Choice interface.
      { id: 20, choices: [{ letter: 'A', text: 'life' }, { letter: 'B', text: 'living' }, { letter: 'C', text: 'lives' }, { letter: 'D', text: 'lively' }], correctAnswer: 'C' },
      { id: 21, choices: [{ letter: 'A', text: 'paved' }, { letter: 'B', text: 'made' }, { letter: 'C', text: 'opened' }, { letter: 'D', text: 'clear' }], correctAnswer: 'A' },
      { id: 22, choices: [{ letter: 'A', text: 'In contrast' }, { letter: 'B', text: 'Furthermore' }, { letter: 'C', text: 'Therefore' }, { letter: 'D', text: 'Consequently' }], correctAnswer: 'B' },
    ],
  }
];