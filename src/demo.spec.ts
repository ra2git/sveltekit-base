import { describe, it, expect } from "vitest";
import { filterData, sortData } from "$lib/utils";
import type { Quota } from "$lib/utils";

const MockQuotas: Quota[] = [
  { name: "Basic Quota", limit: 100, is_enabled: true, project_id: "p1", id: "1" },
  { name: "Premium Quota", limit: 500, is_enabled: false, project_id: "p1", id: "2" },
  { name: "Advanced Quota", limit: 300, is_enabled: true, project_id: "p1", id: "3" },
  { name: "Farmer Quota", limit: 100, is_enabled: true, project_id: "p1", id: "4" },
  { name: "Town Quota", limit: 500, is_enabled: false, project_id: "p1", id: "5" },
  { name: "Non Quota", limit: 300, is_enabled: true, project_id: "p1", id: "6" },
];

describe("Test `filterData`", () => {
  it("filters quotas by name", () => {
    expect(filterData(MockQuotas, "Basic")).toEqual([MockQuotas[0]]);
    expect(filterData(MockQuotas, "N")).toEqual([MockQuotas[5], MockQuotas[4], MockQuotas[2]]);
    expect(filterData(MockQuotas, "Quota")).toEqual([MockQuotas[5], MockQuotas[4], MockQuotas[0], MockQuotas[3], MockQuotas[1], MockQuotas[2]]);
    expect(filterData(MockQuotas, "nonexistent")).toEqual([]);
  });

  it("handles empty search string", () => {
    expect(filterData(MockQuotas, "")).toEqual(MockQuotas);
  });

  it("is case insensitive", () => {
    expect(filterData(MockQuotas, "basic")).toEqual([MockQuotas[0]]);
    expect(filterData(MockQuotas, "PREMIUM")).toEqual([MockQuotas[1]]);
  });
});


describe("Test `sortData`", () => {
  it("sorts by name ascending", () => {
    const sortConfig = { name: 1, is_enabled: 0, limit: 0 };
    const sorted = sortData(MockQuotas, sortConfig);
    expect(sorted.map(q => q.name)).toEqual([
      "Advanced Quota",
      "Basic Quota",
      "Farmer Quota",
      "Non Quota",
      "Premium Quota",
      "Town Quota"
    ]);
  });

  it("sorts by name descending", () => {
    const sortConfig = { name: 2, is_enabled: 0, limit: 0 };
    const sorted = sortData(MockQuotas, sortConfig);
    expect(sorted.map(q => q.name)).toEqual([
      "Town Quota",
      "Premium Quota",
      "Non Quota",
      "Farmer Quota",
      "Basic Quota",
      "Advanced Quota"
    ]);
  });

  it("sorts by status (is enabled)", () => {
    const sortConfig = { name: 0, is_enabled: 2, limit: 0 };
    const sorted = sortData(MockQuotas, sortConfig);

    const enabledItems = sorted.filter(q => q.is_enabled === true);
    const disabledItems = sorted.filter(q => q.is_enabled === false);

    expect(enabledItems).toHaveLength(4);
    expect(disabledItems).toHaveLength(2);

    // Verify all enabled items come before all disabled items
    const lastEnabledIndex = sorted.findLastIndex(q => q.is_enabled);
    const firstDisabledIndex = sorted.findIndex(q => q.is_enabled === false);
    expect(lastEnabledIndex).toBeLessThan(firstDisabledIndex);
  });

  it("sorts by status (is disabled)", () => {
    const sortConfig = { name: 0, is_enabled: 1, limit: 0 };
    const sorted = sortData(MockQuotas, sortConfig);

    const enabledItems = sorted.filter(q => q.is_enabled);
    const disabledItems = sorted.filter(q => q.is_enabled === false);

    expect(enabledItems).toHaveLength(4);
    expect(disabledItems).toHaveLength(2);

    // Verify all diabled items come before all enabled items
    const lastDisabledIndex = sorted.findLastIndex(q => q.is_enabled === false);
    const firstEnabledIndex = sorted.findIndex(q => q.is_enabled);
    expect(lastDisabledIndex).toBeLessThan(firstEnabledIndex);
  });

  it("sorts by limit ascending", () => {
    const sortConfig = { name: 0, is_enabled: 0, limit: 1 };
    const sorted = sortData(MockQuotas, sortConfig);
    expect(sorted.map(q => q.limit)).toEqual([100, 100, 300, 300, 500, 500]);
  });

  it("sorts by limit descending", () => {
    const sortConfig = { name: 0, is_enabled: 0, limit: 2 };
    const sorted = sortData(MockQuotas, sortConfig);
    expect(sorted.map(q => q.limit)).toEqual([500, 500, 300, 300, 100, 100]);
  });

  it("handles no sort configuration", () => {
    const sortConfig = { name: 0, is_enabled: 0, limit: 0 };
    expect(sortData(MockQuotas, sortConfig)).toEqual(MockQuotas);
  });
});