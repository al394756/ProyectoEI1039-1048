import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProyectoEI1039-1048'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProyectoEI1039-1048');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ProyectoEI1039-1048 app is running!');
  });

  it('Como usuario quiero validar las coordenadas geográficas de una ubicación disponible en los servicios API activos, con el fin de evaluar su utilidad', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let coordenadasPrueba = new Coordenadas("N39°28'11.1","O0°22'38.6");
    let servicioApi = new ApiWeather();
    expect(servicioApi.exists(coordenadasPrueba)).toEqual(true);
  });

  it('Como usuario quiero validar las coordenadas geográficas de una ubicación no disponible en los servicios API activos, con el fin de evaluar su utilidad', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let coordenadasPrueba = new Coordenadas("abc","O0°22'38.6");
    let servicioApi = new ApiWeather();
    expect(servicioApi.exists(coordenadasPrueba)).toThrow(new IncorrectLocationException());
  });
});
