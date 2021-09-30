#include <iostream>
#include <GL/freeglut.h>

#include "grix.h"

using namespace std;

void renderScene();
int main(int argc, char** argv) {

	Grix::Window* mainWindow = new Grix::Window("Grix Demo");
	
	mainWindow->init(renderScene);
	mainWindow->render();
	

	return 0;
}

void renderScene() {

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	glBegin(GL_TRIANGLES);
		glVertex3f(-0.5, -0.5, 0.0);
		glVertex3f(0.5, 0.0, 0.0);
		glVertex3f(0.0, 0.5, 0.0);
	glEnd();

	glutSwapBuffers();
}