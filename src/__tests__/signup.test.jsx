import { benchmarkPassword } from "../utils/passwordAssessor";

/**
 * Ways to improve password benchmarking
 * - See if there is any same character in a sequence
 */
describe("Sign Up", () => {
  it("Password only contains mix of lowercase and uppercase", () => {
    const passwordBenchmark = benchmarkPassword("Hello");
    expect(passwordBenchmark.score).toBe(1);
    expect(passwordBenchmark.isMixOfLowerAndUpper).toBe(true);
  });

  it("Password only contains symbol or number", () => {
    const passwordBenchmark = benchmarkPassword("123");
    expect(passwordBenchmark.score).toBe(1);
    expect(passwordBenchmark.hasNumberOrSymbol).toBe(true);
  });

  it("Password do not reach minimum length", () => {
    const passwordBenchmark = benchmarkPassword("passwor");
    expect(passwordBenchmark.score).toBe(0);
    expect(passwordBenchmark.isMinimum).toBe(false);
  });

  it("Password match all conditions", () => {
    const passwordBenchmark = benchmarkPassword("P4ssword");
    expect(passwordBenchmark.score).toBe(passwordBenchmark.totalScore);
  });
});
