// Interface for MajorCredits
interface MajorCredits {
  credits: number;
  _majorBrand: 'major'; // unique brand property
}

// Interface for MinorCredits
interface MinorCredits {
  credits: number;
  _minorBrand: 'minor'; // unique brand property
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'major',
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'minor',
  };
}

// Example usage (optional test)
const major1: MajorCredits = { credits: 3, _majorBrand: 'major' };
const major2: MajorCredits = { credits: 4, _majorBrand: 'major' };

const minor1: MinorCredits = { credits: 2, _minorBrand: 'minor' };
const minor2: MinorCredits = { credits: 1, _minorBrand: 'minor' };

console.log('Total Major Credits:', sumMajorCredits(major1, major2));
console.log('Total Minor Credits:', sumMinorCredits(minor1, minor2));
