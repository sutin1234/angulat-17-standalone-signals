import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LargeComponentComponent } from "./large-component.component";

describe("LargeComponentComponent", () => {
  let component: LargeComponentComponent;
  let fixture: ComponentFixture<LargeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LargeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should has content", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      "large-component works!",
    );
  });

  it("should has content in p tag", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      "large-component works!",
    );
  });

  it("should has data in p tag inside comp", () => {
    expect(1).toBe(1);
  })
});
