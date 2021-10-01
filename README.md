# AutoSync GRIX V 0.10.0 Earth

## GPU accelerated GUI kit for C++

### Milestones for 1.0 Version

---
## Grix application progress

 - [ ] **Window Creation**
     - [x] window object
     - [x] mainLoop
     - [ ] render Loop **50%**
     - [ ] message loop
 - [ ] Render Mode
    - [ ] 2D OpenGL Engine
    - [ ] 3D OpenGL Engine
 - [ ] Event orientation
 - [ ] Widgets
    - [ ] Containers 
    - [ ] Buttons
    - [ ] Inputs
 - [ ] Vectors Library
 - [ ] GLSL Engine
    - [ ] Shaders Design
    - [ ] Shaders Render
 - [ ] XML Engine
    - [ ] layout design
    - [ ] ordering template
    - [ ] triggering events

---

## Window Creation

### Window Object

```cpp

#include <GL/freeglut.h>
#include "grix.h"

// Design prototype
void renderScene();

using namespace std;
int main(int argc, char** argv) {

	//Create the Window object
	Grix::Window* mainWindow = new Grix::Window("Grix Demo");
	
	//initializes and sets the scene to be rendered
	mainWindow->init(renderScene);
	//starts rendering loop
	mainWindow->render();

	return 0;
}

//definition of scene rendering
void renderScene() {

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glBegin(GL_TRIANGLES);
		glVertex3f(-0.5, -0.5, 0.0);
		glVertex3f(0.5, 0.0, 0.0);
		glVertex3f(0.0, 0.5, 0.0);
	glEnd();
	glutSwapBuffers();
}
  
```
