const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {
  if (error instanceof Error) {
    // Handle the expected type of error
    console.log(error.message);
  } else {
    // Re-throw the error because it's unexpected
    throw error;
  }
}
