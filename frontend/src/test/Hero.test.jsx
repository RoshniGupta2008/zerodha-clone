import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
    test("render hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
     test("render signup button", () => {
        render(<Hero />);
        const signupButton = screen.getAllByRole("button", {name:/signup now/i,});
        expect(signupButton[0]).toBeInTheDocument();
        expect(signupButton[0]).toHaveClass("btn-primary");
    });
});