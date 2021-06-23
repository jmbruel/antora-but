#!/bin/bash

# Génération dans output (après un clean)
antora generate --attribute aim=rapport  --stacktrace playbook-local.yml

if [ $? == 0 ]; then
	echo OK

  # Restitution des fichiers DEVANT se trouver dans output
  # que la génération a effacé (à cause du mode clean du playbook)
  cp output-constants/* output

else
	echo Failed
fi