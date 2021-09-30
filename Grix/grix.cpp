#include "grix.h"
#include <GL/freeglut.h>

Grix::Size::Size(int new_x, int new_y)
{
	this->x = new_x;
	this->y = new_y;
}


Grix::Window::Window(std::string title)
{
	this->title = title;
	glutInit(&__argc, __argv);
	glutInitWindowPosition(0, 0);
	glutInitWindowSize(size.x, size.y);
	glutInitDisplayMode(GLUT_SINGLE);
	glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH);

	glutCreateWindow(this->title.c_str());

}

Grix::Window::~Window(){

}

void Grix::Window::init(void renderLoop(void))
{
	glutDisplayFunc(renderLoop);
}

void Grix::Window::render() {
	glutMainLoop();
}

void Grix::Window::setWindowSize(Size newSize)
{
	this->size = newSize;
}

void Grix::Window::setWindowSize(int x, int y)
{
	this->size.x = x;
	this->size.y = y;
}



