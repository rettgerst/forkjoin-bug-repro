import { forkJoin, Observable } from "rxjs";

const o1 = new Observable((s) => {
  setTimeout(() => {
    console.log("01 complete");
    s.complete();
  }, 100);
});

const o2 = new Observable((s) => {
  setTimeout(() => {
    console.log("02 complete");
    s.complete();
  }, 200);
});

const o3 = new Observable((s) => {
  setTimeout(() => {
    console.log("03 complete");
    s.complete();
  }, 500);
});

forkJoin([o1, o2, o3]).subscribe({
  complete: () => {
    console.log("all observables have completed");
  },
});
